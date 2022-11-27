import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { UnitComponent } from 'app/modules/admin/unit/unit.component';
import { ListComponent } from 'app/modules/admin/unit/list/list.component';
const unitRoutes: Route[] = [
    {
        path     : '',
        component: UnitComponent
    },
    {
        path:'list',
        component : ListComponent
    }
];

@NgModule({
    
    declarations: [
        UnitComponent,
        ListComponent
    ],
    imports     : [
        RouterModule.forChild(unitRoutes),
        ReactiveFormsModule,
        CommonModule
    ]
})
export class UnitModule
{
}
