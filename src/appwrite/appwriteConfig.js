import {Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint("").setProject("")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "")
