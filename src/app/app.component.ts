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
  public _9 = 'mx';
  public R = 'mx';
  public S = 'mx';
  public S_1 = 'mx';
  public S_2 = 'mx';
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
    '_9',
    'S',
    'S_1',
    'S_2',
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

  techdataOrderDesc = [
    {key: 'E', label: 'E', description: 'Identifikační číslo vozidla (VIN)'},
    {key: 'R', label: 'R', description: 'Barva'},
    {key: 'ESC', label: 'ES č.', description: ''},
    {key: 'ZTPC', label: 'ZTP č.', description: ''},
    {key: '_1', label: '1', description: 'Druh vozidla'},
    {key: '_2', label: '2', description: ''},
    {key: 'J', label: 'J', description: 'Kategorie vozidla(zkratka)'},
    {key: 'D_1', label: 'D.1', description: 'Tovární značka'},
    {key: 'D_2_1', label: 'D.2a', description: 'Typ'},
    {key: 'D_2_2', label: 'D.2b', description: 'Varianta'},
    {key: 'D_2_3', label: 'D.2c', description: 'Verze'},
    {key: 'D_3', label: 'D.3', description: 'Obchodní označení'},
    {key: '_3', label: '3', description: 'Výrobce vozidla'},
    {key: '_4', label: '4', description: 'Výrobce'},
    {key: '_5', label: '5', description: 'Typ'},
    {key: 'P_1', label: 'P.1', description: 'zdvih objem[cm]'},
    {key: 'P_2', label: 'P.2/P.4', description: 'Max. výkon [kW]'},
    {key: 'P_3', label: 'P.3', description: 'Palivo'},

    {key: 'V_9_1', label: 'V.9', description: 'Předpis EHK OSN č'},
    {key: 'V_9_2', label: 'V.9b', description: 'Směrnice EHS/ES č'},
    {key: 'V_6', label: 'V.6', description: 'Korigovaný součinitel absorbce [em]'},
    {key: 'V_7', label: 'V.7', description: 'CO2[g.km]]'},
    {key: '_6', label: '6', description: 'výrobce'},
    {key: '_7', label: '7', description: 'druh(typ)'},
    {key: '_8', label: '8', description: 'výrobní číslo(nástavby, kabiny)'},
    {key: 'S', label: 'S', description: 'Počet míst - celkem'},
    {key: 'S_1', label: 'S.1', description: '- k sezení'},
    {key: 'S_2', label: 'S.2', description: '- k stání'},
    {key: '_9', label: '9', description: '- lůžek'},
    {key: '_10', label: '10', description: 'Maximální zatížení střechy'},
    {key: '_11', label: '11', description: 'Objem cisterny'},

    {key: '_12', label: '12', description: 'Celková [mm] - délka'},
    {key: '_13', label: '13', description: '- šířka'},
    {key: '_14', label: '14', description: '- výška'},

    {key: 'M', label: 'M', description: 'Rozvor[mm]'},

    {key: '_15', label: '15', description: 'Rozměry ložné plochy[mm]-délka'},
    {key: '_16', label: '16', description: '- šířka'},

    {key: 'G', label: 'G', description: 'Provozní hmotnost[kg]'},

    {key: 'F', label: 'F.1/F.2', description: ''},

    {key: 'N', label: 'N1; N2; N3; N4', description: 'Největší technicky přístupná/povolená hmotnost na nápravu [kg]'},

    {key: '_17', label: '17', description: 'Největší svisle statické zatížení spojovacího zařízení(závěs/točnice))[kg]'},

    {key: 'O_1', label: 'O.1', description: 'Největší technicky přípustná / povolená hmotnost přípojného vozidla [kg] - brzděného'},
    {key: 'O_2', label: 'O.2', description: 'Největší technicky přípustná / povolená hmotnost přípojného vozidla [kg] - nebrzděného'},

    {key: '_18', label: '18/F.3', description: ''},

    {key: '_19', label: '19', description: ''},
    {key: 'L', label: 'L', description: ''},
    {key: '_20', label: '20', description: ''},
    {key: '_21', label: '21', description: ''},
    {key: '_22', label: '22', description: ''},
    {key: '_23', label: '23', description: ''},
    {key: 'T', label: 'T', description: ''},
    {key: '_24_1', label: '24a', description: ''},
    {key: '_24_2', label: '24b', description: ''},
    {key: '_24_3', label: '24c', description: ''},
    {key: '_24_4', label: '24d', description: ''},
    {key: 'U1_U2', label: 'U1/U2', description: ''},
    {key: 'U3', label: 'U3', description: ''},
    {key: '_25', label: '25', description: ''},
    {key: '_26', label: '26', description: ''},
    {key: '_27', label: '27', description: ''},
    {key: 'Q', label: 'Q', description: ''},
    {key: '_28', label: '28', description: ''},
    {key: '_29', label: '29', description: ''},
    {key: '_30', label: '30', description: ''},
    {key: 'vozidlocj', label: 'Vozidlo č.j.', description: ''},
    {key: 'vozidlodate', label: 'Vozidlo datum vystavení', description: ''},
    {key: 'nastavbacj', label: 'Nadstavba č.j.', description: ''},
    {key: 'nastavbadate', label: 'Nadstavba datum doplnění', description: ''},
    {key: 'DZ_1', label: 'DZ.1', description: ''},
    {key: 'DZ_2', label: 'DZ.2', description: ''},
    {key: 'DZ_3', label: 'DZ.3', description: ''},
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



  printOffsetY = 0;
  printOffsetX = 0;

  printlines: number[] = new Array(47); //47
  printlinesdz: number[] = new Array(3); //47


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
    return this.printOffsetY + 'mm';
  }

  trackByFn(index, item) {
    return index;
  }

}
