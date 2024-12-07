import { Account } from "./account"

//  this is the type for whole data provided in data.json file in the root of the project.

export type MainDataType = {
    object_category: string,
    connection_id: string,
    user: string,
    object_creation_date: string,
    data:Account[],
    currency: string,
    object_origin_type: string,
    object_origin_category: string,
    object_type: string,
    object_class: string,
    balance_date: string
} 