export default function GetImageLink() {
  return (
    <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center">
      <a
        href="https://postimages.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Open PostImage to Upload and Get Link
      </a>
    </div>
  );
}
