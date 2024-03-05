import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import BpmnViewer from 'bpmn-js';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import { Observable, from } from 'rxjs';
import BpmnModeler from 'bpmn-js/lib/Modeler';

@Component({
  selector: 'app-bpmn-viewer-file',
  templateUrl: './bpmn-viewer-file.component.html',
  styleUrls: ['./bpmn-viewer-file.component.css']
})
export class BpmnViewerFileComponent {
  @ViewChild('bpmnContainer1', { static: true }) private bpmnContainer1: ElementRef;

  private modeler: BpmnModeler;

  constructor() {

  }
  ngOnInit(): void {
    this.modeler = new BpmnModeler({
      container: this.bpmnContainer1.nativeElement,
      keyboard: { bindTo: document },
    });
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.readBpmnFile(file);
    }
  }

  readBpmnFile(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const bpmnXml = e.target.result;
      this.renderBpmn(bpmnXml);
    };

    reader.readAsText(file);
  }

  renderBpmn(bpmnXml: string): void {
    this.modeler.importXML(bpmnXml, (err) => {
      if (err) {
        console.error('Error rendering BPMN:', err);
      } else {
        console.log('BPMN rendered successfully');
      }
    });
  }
  // private bpmnJS: BpmnJS = new BpmnJS();

  // private viewer: BpmnViewer;

  // constructor(private http: HttpClient) {
  //   this.bpmnJS.on('import.done', ({ error }) => {
  //     if (!error) {
  //       this.bpmnJS.get('canvas').zoom('fit-viewport');
  //     }
  //   });
  // }

  // ngAfterContentInit(): void {
  //  // this.bpmnJS.attachTo(this.bpmnContainer1.nativeElement);
  // }

  
  // ngOnInit(): void {
  //   this.viewer = new BpmnViewer({ container: this.bpmnContainer1.nativeElement });

  // }

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.readBpmnFile(file);
  //   }
  // }

  // readBpmnFile(file: File): void {
  //   const reader = new FileReader();

  //   reader.onload = (e: any) => {
  //     const bpmnXml = e.target.result;
  //     //this.importDiagram(bpmnXml);
  //     this.renderBpmn(bpmnXml);
  //   };

  //   reader.readAsText(file);
  // }

  // renderBpmn(bpmnXml: string): void {
  //   this.viewer.importXML(bpmnXml, (err) => {
  //     if (err) {
  //       console.error('Error rendering BPMN:', err);
  //     } else {
  //       console.log('BPMN rendered successfully');
  //     }
  //   });
  // }

  // private importDiagram(xml: string): Observable<{warnings: Array<any>}> {
  //   console.log(xml,'dmldata');
  //   return from(this.bpmnJS.importXML(xml) as Promise<{warnings: Array<any>}>);
  // }

  downloadBpmn1() {
    // Get BPMN XML content from the viewer
    this.modeler.saveXML({ format: true }, (err, xml) => {
      if (err) {
        console.error('Error saving BPMN:', err);
      } else {
        // Create a Blob from the XML content
        const blob = new Blob([xml], { type: 'application/xml' });

        // Create a download link and trigger download
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'bpmn-diagram.bpmn';
        link.click();
      }
    });
  }
}