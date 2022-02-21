/**
 * @jest-environment jsdom
 */

/*
element.innerText doesnt work with jest. Instead use element.innerHTML
*/

import removeHandler from '../src/modules/removeTask'

import addTaskHandler from '../src/modules/addTask'
import vertBtnSvg from '../src/icons/vertical.svg';

describe('remove task', () => {
    test('remove from localstorage', () => {
        let tasks = [{ "description": "watch tv", "completed": true, "index": 0 },
        { "description": "read book and understand", "completed": false, "index": 1 },
        { "description": "study", "completed": true, "index": 2 },
        { "description": "go to gym", "completed": false, "index": 3 }]

        localStorage.setItem('tasks', JSON.stringify(tasks))

        removeHandler()

        let storageResult = [{ "description": "read book and understand", "completed": false, "index": 0 }, { "description": "go to gym", "completed": false, "index": 1 }]

        expect(JSON.parse(localStorage.getItem('tasks'))).toEqual(storageResult)
    })

    test('remove from ui', () => {
        document.body.innerHTML =
            '<div id="list-container">'
            + '<ul class="list-group">'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2 checked"><input type="checkbox" class="form-check-input" checked><p class="px-3 py-3 mb-0 w-100">watch tv</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">read book and understand</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2 checked"><input type="checkbox" class="form-check-input" checked><p class="px-3 py-3 mb-0 w-100">study</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">go to gym</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '</ul>'
            + '</div>'

        const checkBoxes = document.querySelectorAll('#list-container li > input[type=checkbox]');
        removeHandler();

        const bodyResult =
            '<div id="list-container">'
            + '<ul class="list-group">'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">read book and understand</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">go to gym</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '</ul>'
            + '</div>'

        expect(document.body.innerHTML).toEqual(bodyResult);
    })
})

describe('add task', () => {
    beforeEach(() => {
        // variables for ui
        const vertBtnSvgInner =
            '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="icon-more-vert" width="512" height="512">'
            + '<defs><symbol id = "icon-more-vert" viewBox = "0 0 512 512">'
            + '<path d = "m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path>'
            + '</symbol></defs><use xlink:href="#icon-more-vert"></use></svg>'

        document.body.innerHTML =
            '<div id="list-container">'
            + '<ul class="list-group">'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">read book and understand</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">go to gym</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '</ul>'
            + '</div>'

        // variables for localstorage
        const startItems = [
            { "description": "read book and understand", "completed": false, "index": 0 },
            { "description": "go to gym", "completed": false, "index": 1 }]

        localStorage.setItem('tasks', JSON.stringify(startItems))

        // need to mock vertbtn .svg
        jest.mock('../src/icons/vertical.svg', () => vertBtnSvgInner)

        addTaskHandler({ value: 'watch tv' })
    })

    test('check localStorage', () => {
        const resultLocalStorage = [
            { "description": "read book and understand", "completed": false, "index": 0 },
            { "description": "go to gym", "completed": false, "index": 1 },
            { "description": "watch tv", "completed": false, "index": 2 }]

        expect(JSON.parse(localStorage.getItem('tasks'))).toEqual(resultLocalStorage)
    })

    test('check ui for new task', () => {
        const bodyResult =
            '<div id="list-container">'
            + '<ul class="list-group">'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">read book and understand</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">go to gym</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '<li class="list-group-item d-flex align-items-center py-0 pe-2"><input type="checkbox" class="form-check-input"><p class="px-3 py-3 mb-0 w-100">watch tv</p><input type="textarea" class="text-edit d-none w-100"><div class="ms-auto"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="move icon-more-vert"><defs><symbol id="icon-more-vert" viewBox="0 0 512 512"><path d="m256 128c35 0 64-29 64-64 0-35-29-64-64-64-35 0-64 29-64 64 0 35 29 64 64 64z m0 64c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z m0 192c-35 0-64 29-64 64 0 35 29 64 64 64 35 0 64-29 64-64 0-35-29-64-64-64z"></path></symbol></defs><use xlink:href="#icon-more-vert"></use></svg></div></li>'
            + '</ul>'
            + '</div>'

        expect(document.body.innerHTML).toBe(bodyResult)
    })
})