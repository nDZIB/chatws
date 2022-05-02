import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { MessagingServiceService } from "../../services/messaging-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pdfSource: SafeUrl;

  constructor(
    private messagingService: MessagingServiceService,
    private sanitizer: DomSanitizer
  ) { 
    this.pdfSource = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/doc.pdf#page=12')
  }

  ngOnInit(): void {
  }
}
