import React, { Component, ErrorInfo, ReactNode } from "react";

/**
 * 에러 바운더리 Props
 */
interface ErrorBoundaryProps {
  /**
   * 에러 발생 시 렌더링할 대체 UI
   */
  fallback?: ReactNode;
  /**
   * 에러 발생 시 실행할 콜백
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /**
   * 자식 컴포넌트
   */
  children: ReactNode;
}

/**
 * 에러 바운더리 State
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * 전역 에러 바운더리 컴포넌트
 * React 컴포넌트 트리에서 발생하는 에러를 캐치하고 사용자에게 친화적인 에러 UI를 표시합니다.
 *
 * @example
 * ```tsx
 * <ErrorBoundary
 *   fallback={<div>에러가 발생했습니다.</div>}
 *   onError={(error, errorInfo) => console.error(error, errorInfo)}
 * >
 *   <App />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로깅 (선택사항)
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // 콜백 실행
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // 커스텀 fallback UI가 있으면 사용
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 기본 에러 UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-md w-full bg-white rounded-[20px] p-8 shadow-lg text-center">
            <div className="mb-4">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-[24px] font-nanum-square font-extrabold text-gray-900 mb-2">오류가 발생했습니다</h2>
              <p className="text-[14px] font-nanum-square font-regular text-gray-600 mb-6">
                예상치 못한 오류가 발생했습니다. 페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
              </p>
              {this.state.error && (
                <details className="text-left mb-4">
                  <summary className="text-[12px] font-nanum-square font-regular text-gray-500 cursor-pointer mb-2">
                    에러 상세 정보
                  </summary>
                  <pre className="text-[12px] font-mono text-red-600 bg-red-50 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-2 bg-raw-umber rounded-[10px] text-[14px] font-nanum-square font-bold text-pure-white hover:opacity-90 transition-opacity"
              >
                다시 시도
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-gray-200 rounded-[10px] text-[14px] font-nanum-square font-bold text-gray-700 hover:bg-gray-300 transition-colors"
              >
                페이지 새로고침
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
