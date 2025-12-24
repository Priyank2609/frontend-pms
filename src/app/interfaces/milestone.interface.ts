export interface Milestone {
  getMilestone: [],

  message: string

}

export interface MilestoneDetailPage {
  message: string,
  milestone: any
}
export interface Milestone {
  _id: string;
  name: string;
  description: string;
  project?: any;
  createdAt?: string;
  updatedAt?: string;
}
