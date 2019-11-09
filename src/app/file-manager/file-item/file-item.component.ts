import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { File } from '../model/file';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-file-item,[app-file-item]',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  faFolder = faFolder;
  faFile = faFile;
  @Input() file: File;
  @Output() OnItemClick = new EventEmitter<File>();
  @ViewChild('Pasta') public PastaMenu: ContextMenuComponent;
  @ViewChild('Arquivo') public ArquivoMenu: ContextMenuComponent;

  constructor() { }

  ngOnInit() {
  }

  itemClick() {
    console.log(this.file);
    this.OnItemClick.emit(this.file);
  }
}
