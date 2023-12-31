/** @format */

import { useState } from 'react'
import useConstant from 'use-constant'
import { useAsync } from 'react-async-hook'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

const useDebouncedSearch = searchFunction => {
    const [inputText, setInputText] = useState('')

    // Debounce the original search async function
    const debouncedSearchFunction = useConstant(() => AwesomeDebouncePromise(searchFunction, 500))

    // The async callback is run each time the text changes,
    // but as the search function is debounced, it does not
    // fire a new request on each keystroke
    const searchResults = useAsync(async () => {
        if (inputText.length === 0) {
            return []
        } else {
            return debouncedSearchFunction(inputText)
        }
    }, [debouncedSearchFunction, inputText])

    return {
        inputText,
        setInputText,
        searchResults
    }
}

export default useDebouncedSearch
