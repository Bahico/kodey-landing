'use client';
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {CaseModel} from "@/models/case.model";
import {getAxios} from "@/api/api.functions";
import DetailComponent from "@/app/components/detailComponent";

export default function Article() {
    const params = useParams();
    const id = params.id as string;
    const [post, setPost] = useState<CaseModel | null>(null);

    useEffect(() => {
        getAxios(`articles/${id}`).then(res => {
            setPost(res.data);
        });
    }, [id]);

    return <DetailComponent first={true} post={post} />
}