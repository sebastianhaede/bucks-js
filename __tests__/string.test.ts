import $ from '../src/index'

// STRING
const NON_TEXT: any = null
const TEXT = 'Hello world'
const URL = 'https://google.com'
const PHOTO_URL = 'https://google.com/photo.jpg'


test('string.is()', () => {
    expect($.string.is(NON_TEXT)).toBe(false)
    expect($.string.is(TEXT)).toBe(true)
})

test('string.isMail()', () => {
    expect($.string.isMail('test@tester.com')).toBe(true)
    expect($.string.isMail('test+22@tester.com')).toBe(true)
    expect($.string.isMail('test.tester@tester.com')).toBe(true)
    expect($.string.isMail('test_tese44ter@tester.com')).toBe(true)
})

test('string.isUrl()', () => {
    expect($.string.isUrl(TEXT)).toBe(false)
    expect($.string.isUrl(URL)).toBe(true)
    expect($.string.isUrl(PHOTO_URL)).toBe(true)
})

test('string.isImageUrl()', () => {
    expect($.string.isImageUrl(URL)).toBe(false)
    expect($.string.isImageUrl(PHOTO_URL)).toBe(true)
})

test('string.isNumeric()', () => {
    expect($.string.isNumeric('a47')).toBe(false)
    expect($.string.isNumeric('47')).toBe(true)
})

test('string.spaceCaseToCamelCase()', () => {
    expect($.string.spaceCaseToCamelCase('Created At')).toBe('createdAt')
    expect($.string.spaceCaseToCamelCase('Created   At')).toBe('createdAt')
    expect($.string.spaceCaseToCamelCase('Created    At')).toBe('createdAt')
})

test('string.camelCaseToSpaceCase()', () => {
    expect($.string.camelCaseToSpaceCase('createdAt')).toBe('Created At')
    expect($.string.camelCaseToSpaceCase('CreatedAt')).toBe('Created At')
})

test('string.snakeCaseToSpaceCase()', () => {
    expect($.string.snakeCaseToSpaceCase('created_at')).toBe('Created At')
    expect($.string.snakeCaseToSpaceCase('Created_At')).toBe('Created At')
})

test('string.snakeCaseToCamelCase()', () => {
    expect($.string.snakeCaseToCamelCase('created_at')).toBe('createdAt')
    expect($.string.snakeCaseToCamelCase('Created_At')).toBe('createdAt')
})


