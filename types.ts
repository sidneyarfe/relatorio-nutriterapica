export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface FinancialData {
  name: string;
  value: number;
  fill: string;
}

export interface AdminValue {
  label: string;
  value: string;
  status: 'Eliminada' | 'Eliminados';
}
