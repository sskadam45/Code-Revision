export interface Category{
    id: number;
    name: string;
    patterns: string;
    tags: string[];
    isCollapsed: false;
    questions?: Question[];
}

export enum DificultyLevel{
    VeryEasy = 'VeryEasy',
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
}

export enum Language{
    Java = 'JAVA',
    Cpp = 'CPP',
    Python = 'Python',
    JavaScript = 'JAVASCRIPT'
}
export interface Question{
    id?: number;
    name: string;
    urlLink?: string;
    language?: Language;
    dificultyLevel: DificultyLevel;
    patterns: string;
    timeComplexity?: string;
    approaches?: string[];
    status?: string;
    tags?: string[];
    important?: boolean;
}
