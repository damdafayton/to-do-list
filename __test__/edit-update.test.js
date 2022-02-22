/**
 * @jest-environment jsdom
 */

import { checkBoxHandler } from "../src/modules/updateCheckBox";
import { textAreaChangeHandler, textAreaEnterKeyHandler, editTaskListenersForStyle } from "../src/modules/editTask"

describe('edit task handlers', () => {
    beforeEach(() => {
        document.body.innerHTML =
            '<div id="list-container">'
            + '<ul class="list-group">'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2 checked"><input type="checkbox" class="form-check-input" checked><p class="px-3 py-3 mb-0 w-100">watch tv</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="icon-more-vert" width="512" height="512"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">read book and understand</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="icon-more-vert" width="512" height="512"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2 checked"><input type="checkbox" class="form-check-input" checked><p class="px-3 py-3 mb-0 w-100">study</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="icon-more-vert" width="512" height="512"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">go to gym</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="icon-more-vert" width="512" height="512"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '</ul>'
            + '</div>'


        let tasks = [{ "description": "watch tv", "completed": true, "index": 0 },
        { "description": "read book and understand", "completed": false, "index": 1 },
        { "description": "study", "completed": true, "index": 2 },
        { "description": "go to gym", "completed": false, "index": 3 }]

        localStorage.setItem('tasks', JSON.stringify(tasks))

        const inputElementToEdit = document.querySelector("#list-container > ul > li:nth-child(3) > input.text-edit")
        inputElementToEdit.value = 'study and added text for test'

        const event = new Event('change')
        inputElementToEdit.dispatchEvent(event)

        textAreaChangeHandler(event)

        editTaskListenersForStyle()
    })

    test('localStorage update after text area change', () => {
        const storageResult = [{ "description": "watch tv", "completed": true, "index": 0 },
        { "description": "read book and understand", "completed": false, "index": 1 },
        { "description": "study and added text for test", "completed": true, "index": 2 },
        { "description": "go to gym", "completed": false, "index": 3 }]

        expect(JSON.parse(localStorage.getItem('tasks'))).toEqual(storageResult)
    })

    test('after click list style changes', () => {
        const firstPTag = document.querySelector('#list-container li:nth-child(1) p');
        firstPTag.click()
        const liElement = firstPTag.parentElement
        expect(liElement.classList.contains('editing')).toBe(true)
    })

    test('remove list styling after press to enter', () => {
        const event = new KeyboardEvent("keydown", { keyCode: 'Enter' })
        const firstInputTag = document.querySelector('#list-container li:nth-child(1) input[type=textarea]');
        firstInputTag.dispatchEvent(event)
        const liElement = firstInputTag.parentElement
        expect(liElement.classList.contains('editing')).toBe(false)
    })
})

describe('update completed status', () => {
    test('update in localStorage', () => {
        const secondCheckBox = document.querySelector('#list-container li:nth-child(2) input[type=checkbox]')
        secondCheckBox.click()
        const changeEvent = new Event('change')
        secondCheckBox.dispatchEvent(changeEvent)
        checkBoxHandler(changeEvent)
        expect(JSON.parse(localStorage.getItem('tasks'))[1].completed).toBe(true)
    })
})