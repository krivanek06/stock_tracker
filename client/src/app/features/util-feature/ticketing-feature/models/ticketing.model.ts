import { StTicketTypes } from '@core';
import { InputSource } from '@shared';

export const TICKET_FORM_INPUT_SOURSE: InputSource[] = [
	{ caption: 'Defect', value: StTicketTypes.Defect },
	{ caption: 'Improvement', value: StTicketTypes.Improvement },
];
