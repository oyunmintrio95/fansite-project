import ForumForm from "./ForumForm";
import ForumPostList from "./ForumPostList";
import { useEffect, useState } from "react";

export default function Forum(){
    return (
        <>
            <h1>Ye Olde Forum</h1>
            <ForumForm />
        </>
        
    );
}