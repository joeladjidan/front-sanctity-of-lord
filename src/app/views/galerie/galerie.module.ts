import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgImageFullscreenViewModule } from "ng-image-fullscreen-view";
import {GalerieRoutingModule} from "./galerie-routing.module";
import {
  AccordionModule, BadgeModule, BreadcrumbModule,
  ButtonModule,
  CardModule, CollapseModule,
  DropdownModule,
  FormModule,
  GridModule, ListGroupModule, NavModule, PaginationModule, PlaceholderModule, PopoverModule, ProgressModule,
  SharedModule, SpinnerModule, TableModule, TabsModule, TooltipModule, UtilitiesModule
} from "@coreui/angular";
import {DocsComponentsModule} from "../../../components";
import {IconModule} from "@coreui/icons-angular";
import {BaseModule} from "../base/base.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    GalerieRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
    NgImageFullscreenViewModule,
    BaseModule,
    CarouselModule
  ]
})
export class GalerieModule {}
