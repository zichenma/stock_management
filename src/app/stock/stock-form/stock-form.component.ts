import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-manage/stock';
import { ActivatedRoute, Router  } from '@angular/router';
import { StockService } from '../stock.service';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';



@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  categories: Array<string> = ['IT', 'Network', 'Finance'];

  stock: Stock;

  constructor(
    private routeInfo: ActivatedRoute,
    private stockService: StockService,
    private router: Router
    ) { }

  ngOnInit() {
    const stockId = +this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);
    const fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        price: [this.stock.price, [Validators.required]],
        desc: [this.stock.desc],
        categories: fb.array([
          [(this.stock.categories.indexOf(this.categories[0]) !== -1)],
          [(this.stock.categories.indexOf(this.categories[1]) !== -1)],
          [(this.stock.categories.indexOf(this.categories[2]) !== -1)]
        ], this.categoriesSelectValidator)
      }
    );
  }

  categoriesSelectValidator (control: FormArray) {
      let valid = false;
      control.controls.forEach(control => {
         if (control.value) {
             valid = true;
         }
      });
      if (valid) {
        return null;
      } else {
        return {categoriesLength: true};
      }
  }

  cancel () {
    this.router.navigateByUrl('/stock');
  }

  save() {
    // console.log(this.stock.rating);
    // this.router.navigateByUrl('/stock');
    const englishCategories = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        englishCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = englishCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
  }

}
