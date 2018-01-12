import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { ParkerHomeSharedModule, UserRouteAccessService } from './shared';
import { ParkerHomeAppRoutingModule} from './app-routing.module';
import { ParkerHomeHomeModule } from './home/home.module';
import { ParkerHomeAdminModule } from './admin/admin.module';
import { ParkerHomeAccountModule } from './account/account.module';
import { ParkerHomeEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        ParkerHomeAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ParkerHomeSharedModule,
        ParkerHomeHomeModule,
        ParkerHomeAdminModule,
        ParkerHomeAccountModule,
        ParkerHomeEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ParkerHomeAppModule {}
