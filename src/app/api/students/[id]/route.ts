import { deleteStudentDb } from '@/db/studentsDb';
import { NextApiRequest, type NextApiHandler } from 'next/types';

export async function DELETE(
    req: NextApiRequest,
    { params } : { params: { id: number }}
): Promise<Response> {
    const p = await params;
    const studentId = await p.id;

    const deleteStudentId = await deleteStudentDb(studentId);

    return new Response(JSON.stringify({deleteStudentId}), {
        headers: {
            'Content-Type': 'application/json'
        },
    });
};