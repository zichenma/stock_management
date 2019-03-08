import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
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
  // for demo:
  // stock: Stock;

  // because stock is aysnc, here need to init stock:
  stock: Stock = new Stock(0, '', 0, 0, '', []);

  constructor(
    private routeInfo: ActivatedRoute,
    private stockService: StockService,
    private router: Router
    ) { }

  ngOnInit() {
    const stockId = +this.routeInfo.snapshot.params['id'];

    const fb = new FormBuilder();
    // for demo only:
    // this.formModel = fb.group(
    //   {
    //     name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
    //     price: [this.stock.price, [Validators.required]],
    //     desc: [this.stock.desc],
    //     categories: fb.array([
    //       [(this.stock.categories.indexOf(this.categories[0]) !== -1)],
    //       [(this.stock.categories.indexOf(this.categories[1]) !== -1)],
    //       [(this.stock.categories.indexOf(this.categories[2]) !== -1)]
    //     ], this.categoriesSelectValidator)
    //   }
    // );
    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        desc: [''],
        categories: fb.array([
          [false],
          [false],
          [false]
        ], this.categoriesSelectValidator)
      }
    );

    // for demo:
    // this.stock = this.stockService.getStock(stockId);
    this.stockService.getStock(stockId).subscribe(
      data => {
        this.stock = data;
        // because data is async, here need to reset formModel
        this.formModel.reset({
          name: data.name,
          price: data.price,
          desc: data.desc,
          categories: [
            [(data.categories.indexOf(this.categories[0]) !== -1)],
            [(data.categories.indexOf(this.categories[1]) !== -1)],
            [(data.categories.indexOf(this.categories[2]) !== -1)]
          ]
        });
      });
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
