export default function Loading(){
    return (
      <>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">results will appear here ...</p>
        </div>
      </>
    );
}