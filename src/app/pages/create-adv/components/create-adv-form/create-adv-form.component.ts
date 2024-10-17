import { Component, OnInit } from '@angular/core';
import { AdvertService, CategoriesService, CategoryDto } from "../../../../../../client/src/app/core/modules/openapi";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-adv-form',
  templateUrl: './create-adv-form.component.html',
  styleUrls: ['./create-adv-form.component.scss']
})
export class CreateAdvFormComponent implements OnInit {
  parentCategoryId = "00000000-0000-0000-0000-000000000000";
  categories: CategoryDto[] = [];
  subcategories: CategoryDto[] = [];
  nestedSubcategories: CategoryDto[] = [];
  categoryForm: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder,
    private advertService: AdvertService,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      images: [[]],
      price: ['', Validators.required],
      email: [''],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
      selectedCategory: [''],
      selectedSubcategory: [''],
      selectedNestedSubcategory: ['']
    });
  }

  ngOnInit() {
    this.categoriesService.categoriesGet().subscribe(data => {
      this.categories = data.filter(category => category.parentId === this.parentCategoryId);
    });

    this.onCategoryChange();
    this.onSubcategoryChange();
  }

  onCategoryChange() {
    this.categoryForm.get('selectedCategory')?.valueChanges.subscribe(value => {
      this.loadSubcategories(value);
    });
  }

  loadSubcategories(categoryId: string) {
    this.categoriesService.categoriesIdGet(categoryId).subscribe(category => {
      this.subcategories = category.childs;
      this.categoryForm.get('selectedSubcategory')?.setValue('');
      this.categoryForm.get('selectedNestedSubcategory')?.setValue('');
      this.nestedSubcategories = [];
    });
  }

  onSubcategoryChange() {
    this.categoryForm.get('selectedSubcategory')?.valueChanges.subscribe(value => {
      if (value) {
        this.loadNestedSubcategories(value);
      } else {
        this.nestedSubcategories = [];
        this.categoryForm.get('selectedNestedSubcategory')?.setValue('');
      }
    });
  }

  loadNestedSubcategories(subcategoryId: string) {
    this.categoriesService.categoriesIdGet(subcategoryId).subscribe(subcategory => {
      this.nestedSubcategories = subcategory.childs;
      if (this.nestedSubcategories.length > 0) {
        this.categoryForm.get('selectedNestedSubcategory')?.enable();
      } else {
        this.categoryForm.get('selectedNestedSubcategory')?.disable();
        this.categoryForm.get('selectedNestedSubcategory')?.setValue('');
      }
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const filesArray: File[] = Array.from(input.files);
      const currentImages = this.categoryForm.value.images || [];
      const updatedImages = currentImages.concat(filesArray).slice(0, 10);
      this.categoryForm.patchValue({ images: updatedImages });
    }
  }

  removeImage(index: number) {
    const currentImages: File[] = this.categoryForm.value.images || [];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    this.categoryForm.patchValue({ images: updatedImages });
  }

  getImageUrl(image: File): string {
    return URL.createObjectURL(image);
  }

  addAdvert() {
    if (this.categoryForm.valid) {
      const name = this.categoryForm.value.name;
      const price = this.categoryForm.value.price;
      const phoneNumber = this.categoryForm.value.phoneNumber;
      const location = this.categoryForm.value.location;
      const description = this.categoryForm.value.description;
      const images = this.categoryForm.value.images;
      const email = this.categoryForm.value.email;

      const nestedSubcategoryId = this.categoryForm.value.selectedNestedSubcategory;
      const subcategoryId = this.categoryForm.value.selectedSubcategory;
      const categoryId = this.categoryForm.value.selectedCategory;

      const finalCategoryId = nestedSubcategoryId || subcategoryId || categoryId;

      if (!finalCategoryId) {
        return;
      }

      this.advertService.advertPost(name, price, phoneNumber, location, finalCategoryId, description, images, email).subscribe(response => {
        this.router.navigate(['/']);
      });
    }
  }
}
