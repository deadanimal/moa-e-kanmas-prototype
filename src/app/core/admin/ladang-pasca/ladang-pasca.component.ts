import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import swal from "sweetalert2";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

import { environment } from "src/environments/environment";
import { MapService } from "src/app/shared/services/map/map.service";

import { Map } from "mapbox-gl";
import * as mapboxgl from "mapbox-gl";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-ladang-pasca",
  templateUrl: "./ladang-pasca.component.html",
  styleUrls: ["./ladang-pasca.component.scss"],
})
export class LadangPascaComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("mapEl", { static: true })
  mapEl: ElementRef<HTMLDivElement>;

  private map: Map;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  // Modal
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      syarikat: "Shan Cheng Enterprise",
      negeri: "Perak",
      pemilikan: "",
      saiz: "",
      status: "1",
    },
    {
      syarikat: "Bukit Merah Aquaculture Sdn.Bhd",
      negeri: "Perak",
      pemilikan: "",
      saiz: "",
      status: "2",
    },
    {
      syarikat: "Gopeng Koi Farm Sdn Bhd",
      negeri: "Perak",
      pemilikan: "",
      saiz: "",
      status: "3",
    },
    {
      syarikat: "Xian Hua Aquatics Trading",
      negeri: "Perak",
      pemilikan: "",
      saiz: "",
      status: "4",
    },
  ];
  SelectionType = SelectionType;

  constructor(
    private _formBuilder: FormBuilder,
    private zone: NgZone,
    private modalService: BsModalService,
    private mapSrv: MapService
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
      this.getChart3();
      this.getChart4();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("ladpas1", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Borang Lengkap",
        litres: 501.9,
      },
      {
        country: "Borang Tak Lengkap",
        litres: 301.9,
      },
      {
        country: "Borang Perlu Disemak",
        litres: 201.1,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    //
    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("ladpas2", am4charts.XYChart);

    chart.data = [
      {
        country: "Perak",
        visits: 2025,
      },
      {
        country: "Pahang",
        visits: 1882,
      },
      {
        country: "Johor",
        visits: 1809,
      },
      {
        country: "Selangor",
        visits: 1322,
      },
      {
        country: "Kedah",
        visits: 1122,
      },
      {
        country: "Negeri Sembilan",
        visits: 1114,
      },
    ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
      am4core.array.each(chart.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
      });
      chart.invalidateRawData();
    }, 2000);

    categoryAxis.sortBySeries = series;
    this.chart2 = chart;
  }

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("ladpas3", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Sendiri",
        litres: 501.9,
      },
      {
        country: "Kerajaan negeri",
        litres: 301.9,
      },
      {
        country: "Kerajaan persekutuan",
        litres: 201.1,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart3 = chart;
  }
  getChart4() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("ladpas4", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Besar",
        litres: 501.9,
      },
      {
        country: "Besar-sederhana",
        litres: 301.9,
      },
      {
        country: "Kecil-sederhana",
        litres: 201.1,
      },
      {
        country: "Kecil",
        litres: 165.8,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart3 = chart;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg' });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

    setTimeout(() =>{
      this.peta()
    }, 3000);
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {class: 'model-lg' });
  }

  closeModal() {
    this.modalRef.hide()
  }

  closeModal2() {
    this.modalRef2.hide()
  }

  confirm() {
    swal.fire({
      title: "Pengesahan",
      text: "Pasti untuk menambah maklumat?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Pasti",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Berjaya",
      text: "Maklumat telah disimpan",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    }).then((result) => {
      if (result.value) {
        this.modalRef.hide()
      }
    })
  }

  ngAfterViewInit() {
    // (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    // const INITIAL_VIEW_STATE = {
    //   latitude: 3.139,
    //   longitude: 101.6869,
    //   zoom: 4,
    //   maxZoom: 16,
    //   bearing: 0,
    //   pitch: 0,
    // };

    // const map = new mapboxgl.Map({
    //   container: "map",
    //   style: "mapbox://styles/mapbox/dark-v10",
    //   // Note: deck.gl will be in charge of interaction and event handling
    //   interactive: true,
    //   center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
    //   zoom: INITIAL_VIEW_STATE.zoom,
    //   bearing: INITIAL_VIEW_STATE.bearing,
    //   pitch: INITIAL_VIEW_STATE.pitch,
    // });
  }

  peta() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    const INITIAL_VIEW_STATE = {
      latitude: 3.139,
      longitude: 101.6869,
      zoom: 4,
      maxZoom: 16,
      bearing: 0,
      pitch: 0,
    };

    const map = new mapboxgl.Map({
      container: "mapasca2",
      style: "mapbox://styles/mapbox/dark-v10",
      // Note: deck.gl will be in charge of interaction and event handling
      interactive: true,
      center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: INITIAL_VIEW_STATE.bearing,
      pitch: INITIAL_VIEW_STATE.pitch,
    });
  }
}
