import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', loadChildren: () => import('./pages/cards/cards.module').then((m) => m.CardsModule), },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule), },
  { path: 'notifications', loadChildren: () => import('./pages/notifications/notifications.module').then( (m) => m.NotificationsModule ), },
  { path: 'bookmarks', loadChildren: () => import('./pages/bookmarks/bookmarks.module').then( (m) => m.BookmarksModule ), },
  { path: 'messages', loadChildren: () => import('./pages/messages/messages.module').then((m) => m.MessagesModule), },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then((m) => m.SettingsModule), },
  { path: 'deals', loadChildren: () => import('./pages/deals/deals.module').then((m) => m.DealsModule), },
  { path: 'graphics', loadChildren: () => import('./pages/graphics/graphics.module').then((m) => m.GraphicsModule), },
  { path: 'transfers', loadChildren: () => import('./pages/transfers/transfers.module').then( (m) => m.TransfersModule ), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
