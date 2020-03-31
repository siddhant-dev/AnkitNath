import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  drone = [
    { title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Drone%2F17425096_' +
    '1243295769122487_2790438449229799301_n.jpg?alt=media&token=e34cc8df-9d47-4b42-9093-780fb6877a9c' },
    { title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Drone%2F17425847_1243296125789118_' +
    '5630269803537372484_n.jpg?alt=media&token=24c22f83-5fa3-4e11-85a7-a623920c4678'}, 
    {title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Drone%2F17457310_1243296205789110_'+
    '7135480432602467523_n.jpg?alt=media&token=e4e9765f-e980-4f3f-bdc4-254f672ef57a'}
  ];
  reen = [
    { title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Reen%2FCapture.JPG?alt=media&token=c35c70ce-a569-476b-a37b-5c6d9bb9684f' },
    { title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Reen%2FIMG-20170929-WA0015.jpg?alt=media&token=2a5fe020-1f18-4ff5-b7a6-cb2e55ecc9d2'},
    {title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Reen%2FIMG-20170929-WA0016.jpg?alt=media&token=b9fa3416-dcf4-46ea-9abf-9e49b2ca4c96'},
  ];

  pi = [
    { title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Pi%2FIMG_20190924_121713_1.jpg?alt=media&token=adc90c8e-9b8b-48b3-8921-d7f2d010eb0f' },
    { title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Pi%2FIMG_20191111_140726.jpg?alt=media&token=b6acb6bf-350f-434f-a4f8-d01ab3422ee3'},
    {title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Pi%2FIMG_20191111_140740.jpg?alt=media&token=588c47af-70df-48b3-920e-13a4cba7964f'},
    {title: 'https://firebasestorage.googleapis.com/v0/b/ankitnathportfolio.appspot.com/o/Pi%2FIMG_20191111_140911.jpg?alt=media&token=0cab3b08-c0ae-4457-9469-3068b0326802'}
  ];

  simulation = [
'MATLAB (Mathematics, Control System Toolbox)',
'Eclipse IDE',
'Keil IDE',
'MultiSIM',
'Verilog (using Xilinx ISE 8.1i & Icarus Verilog)',
'LabView'
  ];

  lang = [
  'Python',
  'C Programming',
  'C++',
  'LINUX (Ubuntu) ',
  'Microsoft Windows 10',
  'LINUX Shell Scripting, Systems Programming'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
