export interface Projects {
  _id: string;
  name: string;
  description: string;
  status: 'Not started' | 'In-progress' | 'Completed';
  createdBy: string;
  assignTo?: string;
  startDate?: string;
  endDate?: string;
  mileStone: string[];
  isDeleted: boolean;
}
