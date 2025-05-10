export interface CardTypes {
    id: number;
    type: string;
    title: string;
    description: string;
    button: string;
    image: string;
    big_image: string;
    images: string[];
    full_title: string;
    full_description: string[];
    full_description_2: string[];
    category: string[];
    date: string;
    sub_title: string[];
    sub_description: string[];
}  

export interface ServiceTypes {
    id: number;
    image: string;
    title: string;
    description: string[];
    big_title: string;
    full_description: string[];
    full_description_2: string[];
    sub_description: string;
    desc_title: string[];
    desc: string[];
}

export interface PatientTypes {
    id: number;
    title: string;
    description: string;
    image: string;
}