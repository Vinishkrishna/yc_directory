import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import {Search} from "lucide-react";
//Server Side rendered form

//Form component extends the HTML<form> element to provide prefetching of loading UI,client-side navigation on submission,and progressive enhancement.

//it is useful for forms that update URL search params as it reduces the boilerplate code needed to achieve the above.

const SearchForm = ({ query }: { query?:string}) => {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />
            <div className="flex gap-2">
                {query && <SearchFormReset/>}
                <button type="submit" className="search-btn text-white">
                    <Search className="size-5"/>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm