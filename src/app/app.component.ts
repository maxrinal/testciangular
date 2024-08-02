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
	data: any = null;
	loading: boolean = true; // Manage loading state
	constructor(private http: HttpClient) {}

	async ngOnInit(): Promise<void> {
		console.log('Ng Init Started');

		try {
			const res = await this.http.get<any>('/data.json').toPromise();
			this.data = res;
			console.log('fetch result:', res);
		} catch (error) {
			console.error('Error fetching JSON:', error);
		}

		this.loading = false;
		console.log('Initialization complete. Data:', this.data);
	}
}
