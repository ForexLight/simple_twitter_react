import React, {useState} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


import './app.css'
import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

 function App (props) {
     let [data, setData] = useState([
         {label: 'Going to learn React', like: false, important: true, id: 1},
         {label: 'Going to learn React', like: false, important: false, id: 2},
         {label: 'Going to learn React', like: false, important: false, id: 3}
     ])
     let maxId = 4
     let [term, setTerm] = useState('')
     let [filter, setFilter] = useState('all')

    const deleteItem = (id) => {
         let i = (id) => {
             const index = data.findIndex(el => el.id === id)
             const before = data.slice(0, index),
                 after = data.slice(index + 1)
             return [...before, ...after]

         }
         setData(i(id))
    }

    const addItem = (body) =>{

        const newItem = {
            label: body,
            important: false,
            id: maxId++
        }
        const newArr = [...data, newItem];
        setData(newArr)
    }
    const onToggleImportant = (id) =>{
        const index = data.findIndex(el => el.id === id)
        const old = data[index]
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        const newItem = {...old, important: !old.important}
        setData(newArr)
    }
    const onToggleLike = (id) =>{
        const index = data.findIndex(el => el.id === id)
        const old = data[index]
        const newItem = {...old, like: !old.like}
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        setData(newArr)
    }

    const searchPost = (items , term) =>{
        if(term === 0){
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    const filterPost =(items, filter) =>{
        if (filter === 'like'){
            return items.filter(i => i.like)
        } else {
            return items
        }
    }

    const onFilterSelect = (filter) =>{
        setFilter(filter)
    }

    const liked = data.filter(item => item.like).length
    const allPost = data.length

    const visiblePosts =filterPost(searchPost(data, term), filter)
    return (
        <AppBlock >
            <AppHeader
                liked={liked}
                allPost={allPost}
            />
            <div className="search-panel d-flex">
                <SearchPanel
                    onUpdateSearch={onUpdateSearch}
                />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={onFilterSelect}
                />
            </div>
            <PostList
                posts={visiblePosts}
                onDelete={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleLike={onToggleLike}
            />
            <PostAddForm
                onAdd={addItem}
            />
        </AppBlock>
    )
}


export default App
