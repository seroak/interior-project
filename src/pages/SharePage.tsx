import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getSharedImage } from "@/services/imageService";
import type { SharedImageRecord } from "@/services/imageService";
import { LoadingSpinner } from "@/components/shared";
import { Header } from "@/components/shared";
import { StyleOptionGrid } from "@/features/interior/StyleOptionGrid";
import { useStyleOptions } from "@/store/useStyleOptions";
import AnimationBeforeAfter from "@/components/shared/AnimationBeforeAfter";

export default function SharePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<SharedImageRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const selectedStyleTitle = useStyleOptions((state) => state.selectedStyleTitle);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      try {
        setLoading(true);
        const record = await getSharedImage(id);
        setData(record);
      } catch (err) {
        console.error(err);
        setError("이미지를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <p className="text-lg text-gray-600 font-medium">{error || "이미지를 찾을 수 없습니다."}</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }
  const generatedImageUrl = data.generated_images as Record<string, string>;
  const currentImage = generatedImageUrl[selectedStyleTitle.toLowerCase()];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-8">
          {/* Comparison View */}
          <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200 shadow-sm">
            {currentImage ? (
              <div className="mx-auto overflow-hidden rounded-lg shadow-2xl h-full w-fit flex items-center justify-center">
                <AnimationBeforeAfter
                  beforeImgPath={data.original_image_url}
                  afterImgPath={currentImage}
                  className="h-full w-auto object-contain"
                />
              </div>
            ) : (
              <div className="text-gray-400">이미지를 불러올 수 없습니다.</div>
            )}
          </div>
          <StyleOptionGrid />
          <div className="flex flex-col items-center gap-4">
            {data.created_at && (
              <div className="text-sm text-gray-400">생성일: {new Date(data.created_at).toLocaleDateString()}</div>
            )}

            <button
              onClick={() => navigate("/interior")}
              className="w-full max-w-md py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              나도 만들어보기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
