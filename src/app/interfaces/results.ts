import { User } from './user';

export interface Results {
    total_count: number;
    incomplete_results: boolean;
    items: Array<User>;
}