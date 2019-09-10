import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	constructor(private location: Location,
		private rest: RestService) { }

	isError = false;
	ngOnInit() {
	

	}
	
	async onClickSubmit(value) {
		let result = await this.rest.register(value).toPromise();
		if (result.result == "ok") {

			this.isError = false;

			Swal.fire({
				title: "Create successfully",
				text: "Click close button to back to the login page",
				type: "success",
				showCancelButton: false,
				confirmButtonColor: "#3085d6",
				confirmButtonText: "Close"
			}).then(result => {
				this.location.back();
			});

		} else {
			this.isError = true;

		}

	}
	onClickCancer() {
		this.location.back();
	}
}
