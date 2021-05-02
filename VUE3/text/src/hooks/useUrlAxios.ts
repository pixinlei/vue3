import { ref } from '@vue/reactivity'
import axios from 'axios'

function useUrlAxios(url: string) {
    const result = ref("")
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref("")

    axios.get(url).then((res) => {
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch((error) => {
        error.value = error
        loading.value = false
    })
    return { result, loading, loaded, error }
}

export default useUrlAxios