import { Component } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";
import { FeatureSection } from "../feature-section/feature-section";
import { AboutSection } from "../about-section/about-section";
import { CtaSection } from "../cta-section/cta-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeatureSection, AboutSection, CtaSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
