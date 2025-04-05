import { getDbConnection } from './db';

export async function getSummaries(userId: string) {
  const sql = await getDbConnection();
  const summaries =
    await sql`SELECT * from pdf_summaries where user_id = ${userId} ORDER BY created_at DESC`;
  return summaries;
}

export async function getSummaryById(id: string) {
    // Check if the id is a valid UUID
    if (!id || typeof id !== "string") {
        console.error("Invalid ID format:", id);
        return null; // Return null if the ID is invalid
    }

    try {
        const sql = await getDbConnection();
        const [summary] = await sql`SELECT 
        id,
        user_id,
        title,
        original_file_url,
        summary_text,
        created_at,
        updated_at,
        status,
        file_name,
        LENGTH(summary_text) - LENGTH(REPLACE(summary_text, ' ', '')) + 1 as word_count
        from pdf_summaries where id = ${id}`;
        return summary;
    } catch (err) {
        console.error("Error fetching summary by id", err);
        return null;
    }
}

export async function getUserUploadCount(userId: string) {
  const sql = await getDbConnection();
  try {
    const [result] = await sql`SELECT COUNT(*) as count FROM pdf_summaries WHERE user_id = ${userId}`;
    return result?.count || 0;
  } catch(err) {
    console.error('Error catching user upload count', err);
    return 0;
  }
}