import {Component, ViewEncapsulation} from '@angular/core';
import {dataset125ccm, dataset200ccm, dataset50ccm} from './dataset';


class TechData {
  public ESC = '';
  public ZTPC = '';
  public _1 = 'osobni automobil';
  public _2 = 'autak';
  public J = 'M1';
  public D_1 = 'M1';
  public D_2_1 = 'M1';
  public D_2_2 = 'M1';
  public D_2_3 = 'M1';
  public D_3 = 'M1';
  public E = 'M1';
  public _3 = 'M1';
  public _4 = 'M1';
  public _5 = 'M1';
  public P_3 = 'M1';
  public P_2 = 'M1';
  public P_1 = 'M1';
  public V_9_1 = 'mx';
  public V_9_2 = 'mx';
  public V_6 = 'mx';
  public V_7 = 'mx';
  public _6 = 'mx';
  public _7 = 'mx';
  public _8 = 'mx';
  public R = 'mx';
  public S = 'mx';
  public S_1 = 'mx';
  public S_2 = 'mx';
  public S_3 = 'mx';
  public _10 = 'mx';
  public _11 = 'mx';
  public _12 = 'mx';
  public _13 = 'mx';
  public _14 = 'mx';
  public M = 'mx';
  public _15 = 'mx';
  public _16 = 'mx';
  public G = 'mx';
  public F = 'f1';
  public N = 'mx';
  public _17 = 'mx';
  public O_1 = 'mx';
  public O_2 = 'mx';
  public _18 = 'mx';
  public _19 = 'mx';
  public L = 'mx';
  public _20 = 'mx';
  public _21 = 'mx';
  public _22 = 'mx';
  public _23 = 'mx';
  public T = 'mx';
  public _24_1 = 'mx-';
  public _24_2 = 'mx-';
  public _24_3 = 'mx-';
  public _24_4 = 'mx-';
  public U1_U2 = 'mx';
  public U3 = 'mx';
  public _25 = 'mx';
  public _26 = 'mx';
  public _27 = 'mx';
  public Q = 'mx';
  public _28 = 'mx';
  public _29 = 'mx';
  public _30 = 'mx';
  public vozidlocj = 'mx-';
  public vozidlodate = 'mx-';
  public nastavbacj = 'mx-';
  public nastavbadate = 'mx-';
  public DZ_1 = 'mx';
  public DZ_2 = 'mx';
  public DZ_3 = 'mx';

  techdataOrder = [
    'E',
    'R',
    'ESC',
    'ZTPC',
    '_1',
    '_2',
    'J',
    'D_1',
    'D_2_1',
    'D_2_2',
    'D_2_3',
    'D_3',
    '_3',
    '_4',
    '_5',
    'P_3',
    'P_2',
    'P_1',
    'V_9_1',
    'V_9_2',
    'V_6',
    'V_7',
    '_6',
    '_7',
    '_8',
    'S',
    'S_1',
    'S_2',
    'S_3',
    '_10',
    '_11',
    '_12',
    '_13',
    '_14',
    'M',
    '_15',
    '_16',
    'G',
    'F',
    'N',
    '_17',
    'O_1',
    'O_2',
    '_18',
    '_19',
    'L',
    '_20',
    '_21',
    '_22',
    '_23',
    'T',
    '_24_1',
    '_24_2',
    '_24_3',
    '_24_4',
    'U1_U2',
    'U3',
    '_25',
    '_26',
    '_27',
    'Q',
    '_28',
    '_29',
    '_30',
    'vozidlocj',
    'vozidlodate',
    'nastavbacj',
    'nastavbadate',
    'DZ_1',
    'DZ_2',
    'DZ_3',
  ];


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'technicak';

  printTrackingData = false;
  printOffset = 2;

  data: TechData = new TechData();


  constructor() {
    console.log('Technicak start');

    dataset200ccm.forEach(item => {
      const key = Object.keys(item)[0];
      this.data[key] = item[key];
    });

  }

  loadDatasetData(dataset) {
    dataset.forEach(item => {
      const key = Object.keys(item)[0];
      this.data[key] = item[key];
    });
  }

  loadDataset(ccm) {
    switch (ccm) {
      case 50: {
        this.loadDatasetData(dataset50ccm);
        break;
      }
      case 200: {

        this.loadDatasetData(dataset200ccm);
        break;
      }
      case 125: {

        this.loadDatasetData(dataset125ccm);
        break;
      }

    }
  }

  getPrintOffset() {
    return this.printOffset + 'mm';
  }

  trackByFn(index, item) {
    return index;
  }

}
