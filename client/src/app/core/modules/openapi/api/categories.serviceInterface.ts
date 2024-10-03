/**
 * AdBoard API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CategoryDto } from '../model/models';
import { ErrorDto } from '../model/models';
import { ImportCategoryDto } from '../model/models';
import { ShortCategoryDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface CategoriesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Вернуть все категории
     * 
     */
    categoriesGet(extraHttpRequestParams?: any): Observable<Array<ShortCategoryDto>>;

    /**
     * Удаляет категорию по ID
     * 
     * @param id Идентификатор категории
     */
    categoriesIdDelete(id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Получить категорию по id
     * 
     * @param id Идентификатор категории
     */
    categoriesIdGet(id: string, extraHttpRequestParams?: any): Observable<CategoryDto>;

    /**
     * Обновляет категорию по модели
     * 
     * @param id Идентификатор обновляемой категории
     * @param name Название
     * @param parentId Id категории выше по иерархии (если есть)
     */
    categoriesIdPut(id: string, name: string, parentId?: string, extraHttpRequestParams?: any): Observable<ShortCategoryDto>;

    /**
     * Импортирует категории из JSON списка.
     * 
     * @param importCategoryDto Коллекция категорий.
     */
    categoriesImportPost(importCategoryDto?: Array<ImportCategoryDto>, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * Создаёт категорию по модели
     * 
     * @param name Название
     * @param parentId Id категории выше по иерархии (если есть)
     */
    categoriesPost(name: string, parentId?: string, extraHttpRequestParams?: any): Observable<ShortCategoryDto>;

}
