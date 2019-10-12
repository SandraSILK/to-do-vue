'use strict'
import axios from 'axios'
import { apiUrl } from '@/config'

export async function getTodos () {
    return await axios.get(`${apiUrl}/todos/`);
}