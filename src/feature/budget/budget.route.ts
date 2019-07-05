/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算项目的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
<<<<<<< HEAD
 * @LastEditTime: 2019-04-19 17:40:08
=======
 * @LastEditTime: 2019-07-05 12:36:05
>>>>>>> d77c7163b8d263f1114820b35acd56317d76d493
 */
import { Routes } from '@angular/router'
import { HomeComponent } from '../fc/fcsystem/components/home/home.component';

export const Routers: Routes = [
  {
<<<<<<< HEAD
    path: 'home',
=======
    path: '',
>>>>>>> d77c7163b8d263f1114820b35acd56317d76d493
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', // 快速开发平台模块
    loadChildren: '../fc/fc.module#FcModule'
  },
  {
    path: '', // 预算体系模块
    loadChildren: './tx/tx.module#TxModule'
  },
  {
    path: '', // 预算报表模块
    loadChildren: './budget_report/bgreport.module#BgreportModule'
  }
]
