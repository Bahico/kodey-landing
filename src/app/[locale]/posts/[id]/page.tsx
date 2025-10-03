'use client';
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getAxios} from "@/api/api.functions";
import {CaseModel} from "@/models/case.model";
import DetailComponent from "@/app/components/detailComponent";

export default function Post() {
    const params = useParams();
    const id = params.id as string;
    const [post, setPost] = useState<CaseModel | null>(null);

    useEffect(() => {
        getAxios(`cases/${id}`).then(res => {
            setPost(res.data);
        });
    }, [id]);

    return (
        post ?
        <DetailComponent first={false} post={post} />
            : <></>
    );
}
