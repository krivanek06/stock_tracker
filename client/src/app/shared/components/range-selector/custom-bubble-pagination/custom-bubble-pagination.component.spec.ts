import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomBublePaginationComponent } from './custom-bubble-pagination.component';

describe('CustomBublePaginationComponent', () => {
	let component: CustomBublePaginationComponent;
	let fixture: ComponentFixture<CustomBublePaginationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CustomBublePaginationComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CustomBublePaginationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
