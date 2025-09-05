'use client';
import Image from "next/image";
import HeartIcon from "./icons/heart";
import MessageIcon from "./icons/message";
import Container from "./container";

export default function Feed(props: any) {
    return (

        <>
        {props.feed.map((post: any) => (
            <Container key={post.id} className="mb-4">
                <div className="flex flex-row gap-4 items-center mb-4">
                    {post.user.photo && (
                        
                        <Image
                        src="/imgs/kratos.jpg"
                        alt="Foto de perfil"
                        className="rounded-full"
                        width={50}
                        height={50}
                        priority
                        />
                    )}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">{post.user.name}</label>
                        <label className="text-sm font-normal text-gray-400">{post.created_at}</label>
                    </div>
                </div>
                {post.photo_path && (
                    <Image
                        src={post.photo_path}
                        alt=""
                        className="w-full"
                        width={500}
                        height={500}
                        priority
                        />
                )}

                <p className="text-sm mt-4">
                    {post.description}
            </p>
            <div className="w-full flex flex-row gap-4 items-center mt-4">
                <div className="flex flex-row gap-1 items-center">
                    <HeartIcon />
                    <label className="text-sm font-semibold">{post.likes.count}</label>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <MessageIcon />
                    <label className="text-sm font-semibold">{post.comments.count}</label>

                </div>
            </div>
            </Container>
        ))}
        </>
    )
}