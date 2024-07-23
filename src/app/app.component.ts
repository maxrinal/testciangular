import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, JsonPipe],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
	title = 'Reading a json from assets folder';
	data: any;
	constructor(private http: HttpClient) {
		// http.get<any>('./data.json').subscribe((res:any) => (this.data = res) );
		// http.get<any>('./data.json').subscribe((res: any) => ((this.data = res), console.log(res)));
		http.get<any>('/data.json').subscribe((res: any) =>   (this.data = res, console.log('constructor:',res)));
	}
	// async ngOnInit(): Promise<any> {
	ngOnInit(): void {
		console.log('Ng Init Started');
		console.log('Im entering here', this.data);
	}
}
