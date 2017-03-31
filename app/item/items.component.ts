import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {ObservableArray} from "data/observable-array";
import {RadListViewComponent} from "nativescript-telerik-ui/listview/angular";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    private dataItems:ObservableArray<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit() {




        this.dataItems=new ObservableArray<Item>([
            { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
            { id: 3, name: "Piqué", role: "Defender" },
            { id: 4, name: "I. Rakitic", role: "Midfielder" },
            { id: 5, name: "Sergio", role: "Midfielder" },
            { id: 6, name: "Denis Suárez", role: "Midfielder" },
            { id: 7, name: "Arda", role: "Midfielder" }
        ]);
        console.log(this.dataItems);
    }


}
