export type StudyStatus = 'pending' | 'draft' | 'finished';

export interface StudiesResponse {
  data: Study[];
}

export interface Study {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  statusKey: StudyStatus;
  studyThumbnail: string;
  imagesCount: number;
  tags: string[];
}

export interface SortBy {
  type: keyof Pick<Study, 'name' | 'updatedAt'>;
  order: 'asc' | 'desc';
}

export interface Option<T> {
  label: string;
  value: T;
  color?: string;
}

export const filterOptions: Option<StudyStatus>[] = [{
  label: 'Draft',
  value: 'draft'
},
{
  label: 'Finished',
  value: 'finished'
},
{
  label: 'Pending',
  value: 'pending'
}];

export const sortByOptions: Option<SortBy>[] = [{
  label: 'Modified (newest)',
  value: { type: 'updatedAt', order: 'desc' }
},
{
  label: 'Modified (oldest)',
  value: { type: 'updatedAt', order: 'asc' }
},
{
  label: 'Name (A-Z)',
  value: { type: 'name', order: 'asc' }
},
{
  label: 'Name (Z-A)',
  value: { type: 'name', order: 'desc' }
}];
