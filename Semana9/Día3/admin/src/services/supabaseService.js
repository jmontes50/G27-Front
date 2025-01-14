import supabase from "../config/supabaseConfig";

const BUCKET_NAME = "g27storage";
const PATH_WEB_APP = "/webAppFiles"

const uploadFile = async (archivo) => {
  try {
    const respuesta = await supabase.storage.from(BUCKET_NAME).upload(PATH_WEB_APP, "archivo");
    console.log(respuesta)
  } catch (error) {
    throw error
  }
};

export default uploadFile;

/**
 * // Upload file using standard upload
async function uploadFile(file) {
  const { data, error } = await supabase.storage.from('bucket_name').upload('file_path', file)
  if (error) {
    // Handle error
  } else {
    // Handle success
  }
}
 */

