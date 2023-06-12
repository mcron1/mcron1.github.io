import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  extras: any
  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.extras = this.profileService.extraCircular()
  }
}
