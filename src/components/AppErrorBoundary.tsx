import { Component, type ErrorInfo, type ReactNode } from "react";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Integration Discovery failed to render", error, errorInfo);
  }

  private reset = () => {
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="standalone-state">
          <StateMessage
            title="The workspace could not be displayed"
            description="Return to the project list and try again. No customer data was changed."
          />
          <button className="action-button" type="button" onClick={this.reset}>
            Return to projects
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

function StateMessage({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <p className="page-description">{description}</p>
    </div>
  );
}
